
import React,{Component} from 'react';
import Classes from './App.module.css';
//import ProductData from './ProductData';
import ProductPreview from './productpreview/ProductPreview';
import ProductDetails from './productdetails/ProductDetails';
import TopBar from './topbar/TopBar';
import ProductData from './productdata/ProductData';

class App extends Component {
state={
  ProductData:ProductData,
  currentpreviewimagepos:0,
  showheartbeatsection: false,
}


oncolorOptionclick=(pos)=>{
  this.setState({currentpreviewimagepos:pos});
}

onfeatureclick=(pos)=>{
  let updatedstate=false;
  if(pos===1){
    updatedstate=true;
  }
  this.setState({showheartbeatsection:updatedstate});
}
render(){ 

return (
    <div className="App">
     
      <TopBar />
      
      <div className={Classes.Maincontainer}>
        <div className={Classes.productpreview}>
          <ProductPreview currentpreviewimage={this.state.ProductData.colorOptions[this.state.currentpreviewimagepos].imageUrl} 
          showheartbeatsection={this.state.showheartbeatsection} />
        </div>
        <div className={Classes.ProductData}>
          <ProductDetails data={this.state.ProductData} oncolorOptionclick={this.oncolorOptionclick}
           currentpreviewimagepos={this.state.currentpreviewimagepos}
           onfeatureclick={this.onfeatureclick}
           showheartbeatsection={this.state.showheartbeatsection}/>
        </div>

      </div>
    </div>
  );
}
}
export default App;
