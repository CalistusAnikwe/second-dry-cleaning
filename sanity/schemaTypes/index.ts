import { type SchemaTypeDefinition } from 'sanity'
import { homepageType } from './homepageType'
import { navType } from './navType'
import { footerType } from './footerType'
import { servicePageType } from './servicePageType'
import { contactPageType } from './contactPageType'
import { bookingSettingsType } from './bookingSettingsType'
import { postType } from './postType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepageType, navType, footerType, servicePageType, contactPageType, bookingSettingsType, postType],
}
