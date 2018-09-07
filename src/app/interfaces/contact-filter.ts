/*
 * Contact filter interface
 */
export interface ContactFilter {

  /*
   * ID of filter
   */
  id?: number | string;

  /*
   * Sort by field name
   */
  sortBy: string;

  /*
   * Sort direction
   */
  sortDir: boolean;

  /*
   * Filters state
   */
  filter: {[field: string]: string};
}
