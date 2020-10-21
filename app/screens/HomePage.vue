<template>
  <Page class="page">
    <StackLayout>
      <GridLayout rows="auto, *, auto, *, auto" height="100%">
        <StackLayout class="m-t-10">
          <Image src="~/images/icon.png" stretch="fill" height="100" width="100" />
          <Label text="SmartTeller" textWrap="true" class="t-25 c-white text-center m-t-8" />
          <Label text="My cooperative and I" textWrap="true" class="c-white m-t-4 text-center" />
        </StackLayout>

        <StackLayout row="2" class="p-20">
          <StackLayout>
            <GridLayout @tap="login" color="#0088cc" row="auto" columns="40, *, 30" class="c-bg-white p-20" borderRadius="10">
              <Label
                text="account_circle"
                class="icon t-16"
                horizontalAlignment="center"
                verticalAlignment="left"
                textWrap="true" />
              <StackLayout col="1">
                <Label text="LOGIN" textWrap="true" class="t-16" />
                <Label text="login to your cooperative account" class="m-t-4" textWrap="true" />
              </StackLayout>
              <Label text="keyboard_arrow_right" class="icon t-20" textWrap="true" col="2" />
            </GridLayout>

            <!-- <GridLayout @tap="payment" color="#0088cc" row="auto" columns="40, *, 30" class="c-bg-white p-20 m-t-15" borderRadius="10">
              <Label
                text="compare_arrows"
                class="icon t-16"
                horizontalAlignment="center"
                verticalAlignment="middle"
                textWrap="true" />
              <StackLayout col="1">
                <Label text="PAYMENT" textWrap="true" class="t-16" />
                <Label text="send money to a digital cooperative account number" class="m-t-4" textWrap="true" />
              </StackLayout>
              <Label text="keyboard_arrow_right" class="icon t-20" textWrap="true" col="2" />
            </GridLayout> -->
          </StackLayout>
        </StackLayout>

        <StackLayout row="4">
          <Label
            @tap="register"
            borderRadius="10"
            text="Register, join digital cooperative"
            textWrap="true"
            class="c-bg-white text-center p-10 m-20"
            color="#0088cc" />
        </StackLayout>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<style scoped>
.page {
  background-color: #0088cc;
  background-image: url('~/images/splashscreen.png');
}
</style>

<script>
export default {
  methods: {
    login() {
      return this.open('Login', 'https://smartteller.net/login/')
    },

    register() {
      return this.open('Register', 'https://smartteller.net/register/')
    },

    payment() {
      return this.open('Payment', 'https://smartteller.net/pay/')
    },

    open(title, url) {
      return this.$navigator.navigate('/webview', {
        props: {title, url}
      })
    }
  }
}
</script>