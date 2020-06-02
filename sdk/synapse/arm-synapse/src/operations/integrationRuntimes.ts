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
import * as Mappers from "../models/integrationRuntimesMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a IntegrationRuntimes. */
export class IntegrationRuntimes {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a IntegrationRuntimes.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Update an integration runtime
   * @summary Update integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param updateIntegrationRuntimeRequest The parameters for updating an integration runtime.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationRuntimesUpdateResponse>
   */
  update(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, updateIntegrationRuntimeRequest: Models.UpdateIntegrationRuntimeRequest, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationRuntimesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param updateIntegrationRuntimeRequest The parameters for updating an integration runtime.
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, updateIntegrationRuntimeRequest: Models.UpdateIntegrationRuntimeRequest, callback: msRest.ServiceCallback<Models.IntegrationRuntimeResource>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param updateIntegrationRuntimeRequest The parameters for updating an integration runtime.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, updateIntegrationRuntimeRequest: Models.UpdateIntegrationRuntimeRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationRuntimeResource>): void;
  update(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, updateIntegrationRuntimeRequest: Models.UpdateIntegrationRuntimeRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationRuntimeResource>, callback?: msRest.ServiceCallback<Models.IntegrationRuntimeResource>): Promise<Models.IntegrationRuntimesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        updateIntegrationRuntimeRequest,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.IntegrationRuntimesUpdateResponse>;
  }

  /**
   * Get an integration runtime
   * @summary Get integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationRuntimesGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: Models.IntegrationRuntimesGetOptionalParams): Promise<Models.IntegrationRuntimesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, callback: msRest.ServiceCallback<Models.IntegrationRuntimeResource>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options: Models.IntegrationRuntimesGetOptionalParams, callback: msRest.ServiceCallback<Models.IntegrationRuntimeResource>): void;
  get(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: Models.IntegrationRuntimesGetOptionalParams | msRest.ServiceCallback<Models.IntegrationRuntimeResource>, callback?: msRest.ServiceCallback<Models.IntegrationRuntimeResource>): Promise<Models.IntegrationRuntimesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IntegrationRuntimesGetResponse>;
  }

  /**
   * Create an integration runtime
   * @summary Create integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param integrationRuntime Integration runtime resource definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationRuntimesCreateResponse>
   */
  create(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, integrationRuntime: Models.IntegrationRuntimeResource, options?: Models.IntegrationRuntimesCreateOptionalParams): Promise<Models.IntegrationRuntimesCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param integrationRuntime Integration runtime resource definition.
   * @param callback The callback
   */
  create(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, integrationRuntime: Models.IntegrationRuntimeResource, callback: msRest.ServiceCallback<Models.IntegrationRuntimeResource>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param integrationRuntime Integration runtime resource definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, integrationRuntime: Models.IntegrationRuntimeResource, options: Models.IntegrationRuntimesCreateOptionalParams, callback: msRest.ServiceCallback<Models.IntegrationRuntimeResource>): void;
  create(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, integrationRuntime: Models.IntegrationRuntimeResource, options?: Models.IntegrationRuntimesCreateOptionalParams | msRest.ServiceCallback<Models.IntegrationRuntimeResource>, callback?: msRest.ServiceCallback<Models.IntegrationRuntimeResource>): Promise<Models.IntegrationRuntimesCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        integrationRuntime,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.IntegrationRuntimesCreateResponse>;
  }

  /**
   * Delete an integration runtime
   * @summary Delete integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Upgrade an integration runtime
   * @summary Upgrade integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  upgrade(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param callback The callback
   */
  upgrade(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param options The optional parameters
   * @param callback The callback
   */
  upgrade(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  upgrade(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        options
      },
      upgradeOperationSpec,
      callback);
  }

  /**
   * List all integration runtimes
   * @summary List integration runtimes
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationRuntimesListByWorkspaceResponse>
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationRuntimesListByWorkspaceResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.IntegrationRuntimeListResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationRuntimeListResponse>): void;
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationRuntimeListResponse>, callback?: msRest.ServiceCallback<Models.IntegrationRuntimeListResponse>): Promise<Models.IntegrationRuntimesListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.IntegrationRuntimesListByWorkspaceResponse>;
  }

  /**
   * Start an integration runtime
   * @summary Start integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationRuntimesStartResponse>
   */
  start(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationRuntimesStartResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param callback The callback
   */
  start(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, callback: msRest.ServiceCallback<Models.IntegrationRuntimeStatusResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param options The optional parameters
   * @param callback The callback
   */
  start(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationRuntimeStatusResponse>): void;
  start(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationRuntimeStatusResponse>, callback?: msRest.ServiceCallback<Models.IntegrationRuntimeStatusResponse>): Promise<Models.IntegrationRuntimesStartResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        options
      },
      startOperationSpec,
      callback) as Promise<Models.IntegrationRuntimesStartResponse>;
  }

  /**
   * Stop an integration runtime
   * @summary Stop integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param callback The callback
   */
  stop(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param integrationRuntimeName Integration runtime name
   * @param options The optional parameters
   * @param callback The callback
   */
  stop(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  stop(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        options
      },
      stopOperationSpec,
      callback);
  }

  /**
   * List all integration runtimes
   * @summary List integration runtimes
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationRuntimesListByWorkspaceNextResponse>
   */
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationRuntimesListByWorkspaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IntegrationRuntimeListResponse>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationRuntimeListResponse>): void;
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationRuntimeListResponse>, callback?: msRest.ServiceCallback<Models.IntegrationRuntimeListResponse>): Promise<Models.IntegrationRuntimesListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByWorkspaceNextOperationSpec,
      callback) as Promise<Models.IntegrationRuntimesListByWorkspaceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "updateIntegrationRuntimeRequest",
    mapper: {
      ...Mappers.UpdateIntegrationRuntimeRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "integrationRuntime",
    mapper: {
      ...Mappers.IntegrationRuntimeResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const upgradeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/upgrade",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const startOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/start",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeStatusResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const stopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/stop",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.IntegrationRuntimeListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};