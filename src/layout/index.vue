<template>
  <div>
    <Header />
    <SiteMain />
    <Footer />
    <MusicNav />
  </div>
</template>

<script>
import Header from "./components/Header";
import SiteMain from "./components/SiteMain";
import Footer from "./components/Footer";
import MusicNav from "@/components/MusicNav";
export default {
  name: "Layout",
  components: {
    Header,
    SiteMain,
    Footer,
    MusicNav
  }
};
</script>
