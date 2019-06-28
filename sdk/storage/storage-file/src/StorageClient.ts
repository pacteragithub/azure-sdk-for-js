// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { StorageClientContext } from "./generated/lib/storageClientContext";
import { Pipeline } from "./Pipeline";
import { escapeURLPath } from "./utils/utils.common";

/**
 * A StorageClient represents a base client class for ServiceClient, ContainerClient and etc.
 *
 * @export
 * @class StorageClient
 */
export abstract class StorageClient {
  /**
   * URL string value.
   *
   * @type {string}
   * @memberof StorageClient
   */
  public readonly url: string;

  /**
   * Request policy pipeline.
   *
   * @internal
   * @ignore
   * @type {Pipeline}
   * @memberof StorageClient
   */
  protected readonly pipeline: Pipeline;

  /**
   * StorageClient is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator.
   *
   * @protected
   * @type {StorageClientContext}
   * @memberof StorageClient
   */
  protected readonly storageClientContext: StorageClientContext;

  /**
   * Creates an instance of StorageClient.
   * @param {string} url
   * @param {Pipeline} pipeline
   * @memberof StorageClient
   */
  protected constructor(url: string, pipeline: Pipeline) {
    // URL should be encoded and only once, protocol layer shouldn't encode URL again
    this.url = escapeURLPath(url);

    this.pipeline = pipeline;
    this.storageClientContext = new StorageClientContext(
      this.url,
      pipeline.toServiceClientOptions()
    );

    // Remove the default content-type in generated code of StorageClientContext
    const storageClientContext = this.storageClientContext as any;
    if (storageClientContext.requestContentType) {
      storageClientContext.requestContentType = undefined;
    }
  }
}
