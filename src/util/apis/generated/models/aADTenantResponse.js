/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a AADTenantResponse.
 */
class AADTenantResponse {
  /**
   * Create a AADTenantResponse.
   * @property {uuid} aadTenantId The AAD tenant id
   * @property {string} displayName The name of the AAD Tenant
   */
  constructor() {
  }

  /**
   * Defines the metadata of AADTenantResponse
   *
   * @returns {object} metadata of AADTenantResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AADTenantResponse',
      type: {
        name: 'Composite',
        className: 'AADTenantResponse',
        modelProperties: {
          aadTenantId: {
            required: true,
            serializedName: 'aad_tenant_id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AADTenantResponse;
