import { defineConfig } from "astro/config";
import github from "@astrojs/github";

export default defineConfig({
    output: "static",
    adapter: github(),
    base: "/cnmt/",
});
