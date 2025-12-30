import { config, fields, collection, singleton } from '@keystatic/core';

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? {
        kind: 'github',
        repo: {
          owner: 'sjha2048',
          name: 'straystream',
        },
      }
    : {
        kind: 'local',
      },

  ui: {
    brand: { name: 'Straystream' },
  },

  singletons: {
    // Site-wide settings
    settings: singleton({
      label: 'Site Settings',
      path: 'src/content/settings',
      schema: {
        siteName: fields.text({ label: 'Site Name' }),
        siteDescription: fields.text({ label: 'Site Description', multiline: true }),
        socialLinks: fields.array(
          fields.object({
            platform: fields.select({
              label: 'Platform',
              options: [
                { label: 'GitHub', value: 'github' },
                { label: 'Twitter/X', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'Email', value: 'email' },
              ],
              defaultValue: 'github',
            }),
            url: fields.text({ label: 'URL' }),
          }),
          {
            label: 'Social Links',
            itemLabel: (props) => props.fields.platform.value,
          }
        ),
      },
    }),

    // About page content
    about: singleton({
      label: 'About Page',
      path: 'src/content/pages/about',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title' }),
        subtitle: fields.text({ label: 'Subtitle' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/about',
              publicPath: '/images/about/',
            },
          },
        }),
      },
    }),

    // Home page content
    home: singleton({
      label: 'Home Page',
      path: 'src/content/pages/home',
      schema: {
        headline: fields.text({ label: 'Headline' }),
        subheadline: fields.text({ label: 'Subheadline', multiline: true }),
        ctaText: fields.text({ label: 'CTA Button Text' }),
        ctaLink: fields.text({ label: 'CTA Button Link' }),
      },
    }),
  },

  collections: {
    // Blog posts collection
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'publishedDate', 'isPublished'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { isRequired: true },
          },
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          multiline: true,
          validation: { isRequired: true },
        }),
        publishedDate: fields.date({
          label: 'Published Date',
          validation: { isRequired: true },
        }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        isPublished: fields.checkbox({
          label: 'Published',
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/posts',
              publicPath: '/images/posts/',
            },
          },
        }),
      },
    }),

    // Projects collection
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'description' },
      columns: ['title', 'featured'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { isRequired: true },
          },
        }),
        tagline: fields.text({
          label: 'Tagline',
          description: 'Short one-liner about the project',
        }),
        techStack: fields.array(
          fields.text({ label: 'Technology' }),
          {
            label: 'Tech Stack',
            itemLabel: (props) => props.value,
          }
        ),
        projectLink: fields.url({
          label: 'Project URL',
        }),
        repoLink: fields.url({
          label: 'Repository URL',
        }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        featured: fields.checkbox({
          label: 'Featured',
          description: 'Show on home page',
          defaultValue: false,
        }),
        description: fields.markdoc({
          label: 'Description',
          options: {
            image: {
              directory: 'public/images/projects',
              publicPath: '/images/projects/',
            },
          },
        }),
      },
    }),
  },
});
