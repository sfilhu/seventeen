<template>
  <section id="contact" class="pt-50 section">
    <div class="container">
      <h1>Contato</h1>
      <div class="row">
        <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
          <fg-input
            class="input-lg"
            placeholder="Nome"
            v-model="form.firstName"
            addon-left-icon="now-ui-icons users_circle-08"
          >
          </fg-input>
          <fg-input
            class="input-lg"
            placeholder="Email"
            v-model="form.email"
            addon-left-icon="now-ui-icons ui-1_email-85"
          >
          </fg-input>
          <div class="textarea-container">
            <textarea
              class="form-control"
              name="name"
              rows="4"
              cols="80"
              v-model="form.message"
              placeholder="Escreva sua mensagem"
            ></textarea>
          </div>
          <div class="send-button">
            <n-button type="primary" round block size="lg">Enviar</n-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Button, FormGroupInput } from "@/components";
export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>