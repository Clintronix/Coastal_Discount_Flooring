export default {
    name: "hero",
    title: "Hero Image",
    type: "document",
    fields: [
        {
          name: 'title',
          title: "Title",
          type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'description',
            title: "Description",
            type: 'text',
          },
          {
            name: "tglBtn",
            title: "Toggle Button",
            type: "boolean"
          },
          {
            name: 'btnName',
            title: "Button Name",
            type: "string"
          },
        ],
        preview: {
          select: {
            title: 'title',
            media: 'mainImage',
          },
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      }
      