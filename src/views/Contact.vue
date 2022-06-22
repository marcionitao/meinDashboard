<template>
  <div class="contact">
    <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>

    <v-divider></v-divider>

    <v-container class="my-5">
      <v-card class="mx-auto" max-width="500" outlined>
        <v-card-text>
          <h3>
            If you have any questions, please don't hesitate to contact using
            form below...
          </h3>
        </v-card-text>

        <v-card-text>
          <v-form
            ref="form"
            method="POST"
            action="https://formspree.io/marcionitao@gmail.com"
            v-model="valid"
          >
            <v-text-field
              name="name"
              label="Name"
              v-model="name"
              :rules="nameRules"
              required
            ></v-text-field>
            <v-text-field
              name="email"
              label="Email"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              name="subject"
              label="Subject"
              v-model="subject"
              :rules="subjectRules"
              required
            ></v-text-field>
            <v-textarea
              name="message"
              label="Message"
              v-model="message"
              :rules="messageRules"
              required
            ></v-textarea>

            <v-spacer></v-spacer>

            <v-btn color="success mx-0 mt-3" type="submit" :disabled="!valid"
              >Send</v-btn
            >
            <v-btn color="error mx-0 mt-3 ml-2" @click="clear">Cancel</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [(v) => !!v || "Name is required"],
      subject: "",
      subjectRules: [(v) => !!v || "Subject is required"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      message: "",
      messageRules: [(v) => !!v || "Message is required"],

      items: [
        { text: "Home", disabled: false, href: "/meinprojects" },
        { text: "Contact", disabled: true, href: "breadcrumbs_link_1" },
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // eslint-disable-next-line no-console
        console.log(this.title, this.content);
      }
    },
    clear() {
      this.$refs.form.reset();
      this.name = "";
      this.content = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
