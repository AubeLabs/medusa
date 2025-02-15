/**
 * @schema BaseProductOptionValue
 * type: object
 * description: The option's options.
 * x-schemaName: BaseProductOptionValue
 * required:
 *   - id
 *   - value
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The option's ID.
 *   value:
 *     type: string
 *     title: value
 *     description: The option's value.
 *   option:
 *     $ref: "#/components/schemas/BaseProductOption"
 *   option_id:
 *     type: string
 *     title: option_id
 *     description: The option's option id.
 *   metadata:
 *     type: object
 *     description: The option's metadata.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The option's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The option's updated at.
 *   deleted_at:
 *     type: string
 *     format: date-time
 *     title: deleted_at
 *     description: The option's deleted at.
 * 
*/

