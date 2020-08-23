import React from "react";
import Popup from "reactjs-popup";
import "tachyons";
class Variantpopup  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      brandName: [],
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveName = this.saveName.bind(this);
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
    //console.log(this.state.nameOnly)
  }
  
  openforAll() {
    this.props.openforAll(this.state.openforAll);
  }

   openModal() {
    this.setState({ open: true });
    this.props.openforall(this.myRef2)
  }
   closeModal() {
    //event.preventDefault();
      this.setState({ open: false });
    this.props.openforall(null)
  }

  async saveName() {
    let name = this.myRef.current.value;

    await this.setState({ brandName: [...this.state.brandName, name] });

    this.props.replyBrand(this.state.brandName);

    //console.log(this.state.brandName);

    this.closeModal();
  }
  render() {
    return (
      <div>
        
        <a
          className="f6 link dim ba ph3 pv2  dib mid-gray w-100 " 
          onClick={this.openModal}
        >
          Create new Catagory
        </a>
        <Popup
          ref= {this.myRef2}
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="mh2 ph2">
            <h4 className="mh2">Add new product Brand</h4>
            <form className="pa2 black-80 ">
              <div className="w-100 ">
                <label className="f6 b db mb2">Name</label>
                <input
                  id="name"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  ref={this.myRef}
                  aria-describedby="name-desc"
                  placeholder="e.g Lux"
                />
              </div>
              <div className="w-100">
                <label for="name" className="f6 b db mb2">
                  parent(optional)
                </label>
                <input
                  id="name2"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="name-desc"
                  placeholder="sku-1234"
                />
              </div>
            </form>
          </div>

          <div className="" style={{ textAlign: "right" }}>
            <a
              className="f6 link dim ba ph3 pv2 ma2 dib near-black"
              href="#0"
              onClick={this.closeModal}
            >
              Close
            </a>
            <a
              className="f6 link dim ba ph3 pv2 ma2 dib white bg-dark-green"
              href="#0"
              onClick={this.saveName}
            >
              Save
            </a>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Variantpopup;