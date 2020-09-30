<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <!-- <img class="n-logo" src="img/now-logo.png" alt="" /> -->
          <span style="font-family: 'Baloo Tamma 2', cursive; font-size: 100px"
            >S</span
          >
          <h1 class="h1-seo">Seventeen</h1>
          <h3>Code & Marketing</h3>
        </div>
      </div>
    </div>
    <About />
    <Cases />
    <Clients />
    <Services />
    <Contact />
  </div>
</template>
<script>
import { Parallax } from "@/components";
import About from "./About";
import Cases from "./Cases";
import Clients from "./Clients";
import Contact from "./Contact";
import Services from "./Services";
// import Navigation from "./components/Navigation";
// import TabsSection from "./components/Tabs";
// import ProgressPagination from "./components/ProgressPagination";
// import Notifications from "./components/Notifications";
// import Typography from "./components/Typography";
// import JavascriptComponents from "./components/JavascriptComponents";
// import CarouselSection from "./components/CarouselSection";
// import NucleoIconsSection from "./components/NucleoIconsSection";
// import SignupForm from "./components/SignupForm";
// import ExamplesSection from "./components/ExamplesSection";
// import DownloadSection from "./components/DownloadSection";

export default {
  name: "index",
  bodyClass: "index-page",
  components: {
    Parallax,
    About,
    Cases,
    Clients,
    Contact,
    Services,
    // Navigation,
    // TabsSection,
    // ProgressPagination,
    // Notifications,
    // Typography,
    // JavascriptComponents,
    // CarouselSection,
    // NucleoIconsSection,
    // SignupForm,
    // ExamplesSection,
    // DownloadSection,
  },
};
</script>
<style></style>
