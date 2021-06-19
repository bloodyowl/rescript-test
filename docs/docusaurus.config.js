const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "ReScript Test",
  tagline: "A lightweight testing framework for ReScript",
  url: "https://bloodyowl.github.io",
  baseUrl: "/rescript-test/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "bloodyowl", // Usually your GitHub org/user name.
  projectName: "rescript-test", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "ReScript Test",
      logo: {
        alt: "ReScript Test",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/bloodyowl/rescript-test",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} bloodyowl`,
    },
    prism: {
      theme: darkCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/bloodyowl/rescript-test/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
