<template>
  <Page :actionBarHidden="true">
    <StackLayout>
      <StackLayout>
        <Label
          class="text-center p-10 font-weight-bold c-white t-15"
          :text="title"
          textWrap="true"
          backgroundColor="#0088cc" />
      </StackLayout>
      <GridLayout>
        <WebView
          ref="webview"
          :src="url"
          @loaded="loaded"
          @loadStarted="loadStarted"
          @loadFinished="loadFinished" />
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>

import { setStatusBarColor } from '../utils/statusbar'
import { LoadingIndicator } from '@nstudio/nativescript-loading-indicator'
import { Application } from '@nativescript/core'

const loader = new LoadingIndicator()
let webView
let isloading

export default {

  props: ['title', 'url'],

  mounted() {
    setStatusBarColor('#0088cc')
  },

  methods: {

    loaded({object}) {
      webView = object

      if(Application.ios) {
        webView.ios.scrollView.minimumZoomScale = 1.0;
        webView.ios.scrollView.maximumZoomScale = 1.0;
        webView.ios.scalesPageToFit = false;
        webView.ios.scrollView.bounces = false;
      }
    },

    loadStarted(evt) {
      let {url} = evt

      if(!url.includes('smartteller') || isloading) {
        return
      }

     // isloading = true
     // let [main_url] = url.split('?')
     // let has_trailing_slash = main_url.substr(-1, 1) === '/'

      loader.show({
        message: 'Please wait...',
        dimBackground: true,
        color: '#0088cc'
      })

     // if(!has_trailing_slash) {
     //   return webView.src = `${main_url}/`
     // }
    },

    loadFinished(evt) {
      //console.log(evt)
      isloading = false
      loader.hide()
    }
  }
};
</script>

<style scoped lang="scss">
</style>
