// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import * as AsyncLock from "async-lock";

export interface AsyncLockOptions {
  /**
   * @property {number} [timeout] The max timeout. Default is: 0 (never timeout).
   */
  timeout?: number;
  /**
   * @property {number} [maxPending] Maximum pending tasks. Default is: 1000.
   */
  maxPending?: number;
  /**
   * @property {boolean} [domainReentrant] Whether lock can reenter in the same domain. Default is: false.
   */
  domainReentrant?: boolean;
  /**
   * @property {any} [Promise] Your implementation of the promise. Default is: global promise.
   */
  Promise?: any;
}

export interface ParsedConnectionString {
  Endpoint: string;
  SharedAccessKeyName: string;
  SharedAccessKey: string;
  EntityPath?: string;
  [x: string]: any;
}

export function parseConnectionString(connectionString: string): ParsedConnectionString {
  return connectionString.split(';').reduce((acc, part) => {
    const splitIndex = part.indexOf('=');
    return {
      ...acc,
      [part.substring(0, splitIndex)]: part.substring(splitIndex + 1)
    };
  }, {} as any);
}

/**
 * Gets a new instance of the async lock with desired settings.
 * @param {AsyncLockOptions} [options] The async lock options.
 */
export function getNewAsyncLock(options?: AsyncLockOptions): AsyncLock {
  return new AsyncLock(options);
}

/**
 * @constant {AsyncLock} defaultLock The async lock instance with default settings.
 */
export const defaultLock: AsyncLock = new AsyncLock();

export class Timeout {

  private _timer?: NodeJS.Timer;

  set<T>(t: number, value?: T): Promise<T> {
    return new Promise<T>((resolve) => {
      this._timer = setTimeout(() => resolve(value), t);
    });
  }

  clear(): void {
    if (this._timer) {
      clearTimeout(this._timer);
    }
  }

  wrap<T>(promise: Promise<T>, t: number, value?: T): Promise<T> {
    const wrappedPromise = this._promiseFinally(promise, () => this.clear());
    const timer = this.set(t, value);
    return Promise.race([wrappedPromise, timer]);
  }

  private _promiseFinally<T>(promise: Promise<T>, fn: Function): Promise<T> {
    const success = (result: T) => {
      fn();
      return result;
    };
    const error = (e: Error) => {
      fn();
      return Promise.reject(e);
    };
    return Promise.resolve(promise).then(success, error);
  }

  static set<T>(t: number, value?: T): Promise<T> {
    return new Timeout().set(t, value);
  }

  static wrap<T>(promise: Promise<T>, t: number, value?: T): Promise<T> {
    return new Timeout().wrap(promise, t, value);
  }
}

/**
 * A wrapper for setTimeout that resolves a promise after t milliseconds.
 * @param {number} t - The number of milliseconds to be delayed.
 * @param {T} value - The value to be resolved with after a timeout of t milliseconds.
 * @returns {Promise<T>} - Resolved promise
 */
export function delay<T>(t: number, value?: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), t));
}

/**
 * Type declaration for a Function type where T is the input to the function and V is the output of the function.
 */
export type Func<T, V> = (a: T) => V;
