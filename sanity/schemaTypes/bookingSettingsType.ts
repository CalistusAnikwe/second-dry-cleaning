import { defineField, defineType } from 'sanity'

export const bookingSettingsType = defineType({
  name: 'bookingSettings',
  title: 'Booking Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'notificationEmail',
      title: 'Admin Notification Email',
      type: 'string',
      initialValue: 'calistusmine@gmail.com',
      description: 'The email address that will receive new order alerts.'
    }),
    defineField({
      name: 'serviceArea',
      title: 'Active Service Area',
      type: 'string',
      initialValue: 'New York Service Area'
    }),
    defineField({
      name: 'confirmationMessage',
      title: 'Booking Success Message',
      type: 'string',
      initialValue: 'Your premium care pickup has been successfully scheduled.'
    }),
  ],
})