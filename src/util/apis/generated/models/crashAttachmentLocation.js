/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Location for downloading crash attachment
 *
 */
class CrashAttachmentLocation {
  /**
   * Create a CrashAttachmentLocation.
   * @property {string} uri
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashAttachmentLocation
   *
   * @returns {object} metadata of CrashAttachmentLocation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashAttachmentLocation',
      type: {
        name: 'Composite',
        className: 'CrashAttachmentLocation',
        modelProperties: {
          uri: {
            required: true,
            serializedName: 'uri',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CrashAttachmentLocation;
