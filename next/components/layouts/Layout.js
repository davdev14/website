import React from 'react';

/**
 * Layout component
 */
 export class Layout  extends React.Component {
   state = { width: 0, height: 0, format: null };
   render() {
     return (
      <>
        {this.props.render(this.state.width, this.state.height, this.state.format)}
      </>
      )
   }
   updateDimensions = () => {
     const docElem = document.documentElement,
         body = document.getElementsByTagName('body')[0],
         docWidth = window.innerWidth || docElem.clientWidth || body.clientWidth,
         docHeight = window.innerHeight || docElem.clientHeight || body.clientHeight;
         let docFormat;
         
       if(docWidth>=1400){
           docFormat = "xxl";
       }else if(docWidth>=1200){
         docFormat = "xl";
       }else if(docWidth>=992){
         docFormat = "lg";
       }else if(docWidth>=768){
         docFormat = "md";
       }else if(docWidth>=576){
           docFormat = "sm";
       }else{
         docFormat = "xs";
       }
     this.setState({ width: docWidth, height: docHeight, format: docFormat });
   };
   componentDidMount() {
     this.updateDimensions();
     window.addEventListener('resize', this.updateDimensions);
   }
   componentWillUnmount() {
     window.removeEventListener('resize', this.updateDimensions);
   }
 }