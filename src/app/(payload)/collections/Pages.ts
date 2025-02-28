import type { CollectionConfig } from "payload"

export const Pages: CollectionConfig = {
    slug: "pages",
    admin: {
        useAsTitle: "title",
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "slug",
            type: "text",
            required: true,
            unique: true,
            admin: {
                position: "sidebar",
            },
        },
        {
            name: "isHomePage",
            type: "checkbox",
            label: "Is this the home page?",
            admin: {
                position: "sidebar",
                description: "Only one page can be set as the home page",
            },
        },
        {
            name: "hero",
            type: "group",
            fields: [
                {
                    name: "heading",
                    type: "text",
                    required: true,
                },
                {
                    name: "subheading",
                    type: "text",
                },
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                },
                {
                    name: "ctaText",
                    label: "CTA Button Text",
                    type: "text",
                },
                {
                    name: "ctaLink",
                    label: "CTA Button Link",
                    type: "text",
                },
            ],
        },
        {
            name: "featuredSections",
            type: "array",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "content",
                    type: "richText",
                },
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                },
            ],
        },
        {
            name: "seo",
            type: "group",
            fields: [
                {
                    name: "title",
                    type: "text",
                },
                {
                    name: "description",
                    type: "textarea",
                },
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                },
            ],
        },
    ],
}
