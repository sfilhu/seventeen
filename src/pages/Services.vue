<template>
  <section id="services" class="pt-50 section">
    <div class="container">
      <h1>Serviços</h1>
      <div class="d-none d-lg-block">
        <div class="row">
          <div class="col-lg-4">
            <div class="bg-service"></div>
            <h3>Branding</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              autem, minus culpa eius error aspernatur sapiente maxime,
              temporibus repellat quam corporis, dolore inventore voluptatibus
              dolores distinctio consectetur necessitatibus optio dolor!
            </p>
          </div>
          <div class="col-lg-4">
            <div class="bg-service"></div>
            <h3>Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              autem, minus culpa eius error aspernatur sapiente maxime,
              temporibus repellat quam corporis, dolore inventore voluptatibus
              dolores distinctio consectetur necessitatibus optio dolor!
            </p>
          </div>
          <div class="col-lg-4">
            <div class="bg-service"></div>
            <h3>Desenvolvimento</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              autem, minus culpa eius error aspernatur sapiente maxime,
              temporibus repellat quam corporis, dolore inventore voluptatibus
              dolores distinctio consectetur necessitatibus optio dolor!
            </p>
          </div>
        </div>
      </div>

      <!-- Carroussel -->
      <div class="d-sm-block d-md-block d-lg-none d-xl-none">
        <div class="row justify-content-center">
          <div class="col-8">
            <el-carousel height="500px">
              <el-carousel-item>
                <div class="bg-service"></div>
                <h3>Branding</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus autem, minus culpa eius error aspernatur sapiente
                  maxime, temporibus repellat quam corporis, dolore inventore
                  voluptatibus dolores distinctio consectetur necessitatibus
                  optio dolor!
                </p>
              </el-carousel-item>

              <el-carousel-item>
                <div class="bg-service"></div>
                <h3>Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus autem, minus culpa eius error aspernatur sapiente
                  maxime, temporibus repellat quam corporis, dolore inventore
                  voluptatibus dolores distinctio consectetur necessitatibus
                  optio dolor!
                </p>
              </el-carousel-item>
              <el-carousel-item>
                <div class="bg-service"></div>
                <h3>Desenvolvimento</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus autem, minus culpa eius error aspernatur sapiente
                  maxime, temporibus repellat quam corporis, dolore inventore
                  voluptatibus dolores distinctio consectetur necessitatibus
                  optio dolor!
                </p>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, CarouselItem } from "element-ui";

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
  },
};
</script>