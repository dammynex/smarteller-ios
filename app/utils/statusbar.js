import { Utils, Application, iOSApplication, Frame, Color } from '@nativescript/core'

let StatusBarView

export const setStatusBarColor = color => {
  setTimeout(() => {
    if(!Application.ios) {
      return;
    }
  
    let sharedApplication = UIApplication.sharedApplication
    let statusBarFrame = sharedApplication.statusBarFrame
  
    if(!StatusBarView) {
      StatusBarView = UIView.alloc().initWithFrame(statusBarFrame)
      StatusBarView.autoresizingMask = (UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleBottomMargin)
      StatusBarView.autoresizesSubviews = true
      Frame.topmost().ios.controller.view.superview.addSubview(StatusBarView)
    }
  
    StatusBarView.backgroundColor = new Color(color).ios
  }, 100)
}