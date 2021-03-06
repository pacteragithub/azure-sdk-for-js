/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/variableOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a VariableOperations. */
export class VariableOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a VariableOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Create a variable.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The variable name.
   * @param parameters The parameters supplied to the create or update variable operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VariableCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, variableName: string, parameters: Models.VariableCreateOrUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.VariableCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The variable name.
   * @param parameters The parameters supplied to the create or update variable operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, variableName: string, parameters: Models.VariableCreateOrUpdateParameters, callback: msRest.ServiceCallback<Models.Variable>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The variable name.
   * @param parameters The parameters supplied to the create or update variable operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, variableName: string, parameters: Models.VariableCreateOrUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Variable>): void;
  createOrUpdate(resourceGroupName: string, automationAccountName: string, variableName: string, parameters: Models.VariableCreateOrUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Variable>, callback?: msRest.ServiceCallback<Models.Variable>): Promise<Models.VariableCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        variableName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.VariableCreateOrUpdateResponse>;
  }

  /**
   * Update a variable.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The variable name.
   * @param parameters The parameters supplied to the update variable operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VariableUpdateResponse>
   */
  update(resourceGroupName: string, automationAccountName: string, variableName: string, parameters: Models.VariableUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.VariableUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The variable name.
   * @param parameters The parameters supplied to the update variable operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, variableName: string, parameters: Models.VariableUpdateParameters, callback: msRest.ServiceCallback<Models.Variable>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The variable name.
   * @param parameters The parameters supplied to the update variable operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, variableName: string, parameters: Models.VariableUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Variable>): void;
  update(resourceGroupName: string, automationAccountName: string, variableName: string, parameters: Models.VariableUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Variable>, callback?: msRest.ServiceCallback<Models.Variable>): Promise<Models.VariableUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        variableName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.VariableUpdateResponse>;
  }

  /**
   * Delete the variable.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The name of variable.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, variableName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The name of variable.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, variableName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The name of variable.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, variableName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, automationAccountName: string, variableName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        variableName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieve the variable identified by variable name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The name of variable.
   * @param [options] The optional parameters
   * @returns Promise<Models.VariableGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, variableName: string, options?: msRest.RequestOptionsBase): Promise<Models.VariableGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The name of variable.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, variableName: string, callback: msRest.ServiceCallback<Models.Variable>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param variableName The name of variable.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, variableName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Variable>): void;
  get(resourceGroupName: string, automationAccountName: string, variableName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Variable>, callback?: msRest.ServiceCallback<Models.Variable>): Promise<Models.VariableGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        variableName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VariableGetResponse>;
  }

  /**
   * Retrieve a list of variables.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.VariableListByAutomationAccountResponse>
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.VariableListByAutomationAccountResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.VariableListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VariableListResult>): void;
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VariableListResult>, callback?: msRest.ServiceCallback<Models.VariableListResult>): Promise<Models.VariableListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listByAutomationAccountOperationSpec,
      callback) as Promise<Models.VariableListByAutomationAccountResponse>;
  }

  /**
   * Retrieve a list of variables.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VariableListByAutomationAccountNextResponse>
   */
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VariableListByAutomationAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VariableListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VariableListResult>): void;
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VariableListResult>, callback?: msRest.ServiceCallback<Models.VariableListResult>): Promise<Models.VariableListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAutomationAccountNextOperationSpec,
      callback) as Promise<Models.VariableListByAutomationAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.variableName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.VariableCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Variable
    },
    201: {
      bodyMapper: Mappers.Variable
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.variableName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.VariableUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Variable
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.variableName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.variableName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Variable
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VariableListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VariableListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
