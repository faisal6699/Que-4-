import React, { Component } from "react";

import Brandpopup from "./Brandpopup";

import "tachyons";

import '../components/cards.css'

class CardsVariant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      brandItem: [],
      itemHas: false,
      open: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleReply = this.handleReply.bind(this);
    this.opneforall = this.opneforall.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  handleReply(payload) {
    payload.map((item) => {
      return this.setState({ brandItem: [...this.state.brandItem, item] });
    });

    this.setState({ itemHas: true });
  }

  opneforall(result) {
    console.log(result)
   if(result !== null){
     this.setState({ open: true})
   }
   else{
     this.setState({open: false})
   }
  }

  render() {
    return (
      <div>
        {this.state.showMenu ? (
          <div
            className="menu"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
           {this.state.open ? null : (this.state.itemHas
              ? this.state.brandItem.map((item) => {
                  return (
                    <a className="f6 link dim ba ph3 pv2  dib mid-gray w-100  disabled">
                      {item}
                    </a>
                  );
                })
              : null)}
            <Brandpopup
              replyBrand={this.handleReply}
              openforall={this.opneforall}
            />
          </div>
        ) : (
          <a
            className="f6 link dim ba dib mid-gray w-100"
            onClick={this.showMenu}
          >
          
          <p style={{ textAlign: "left", position: "relative" }}>
              Show Variant Catagory<i className="arrow down"></i>
            </p>
            
          </a>
        )}
      </div>
    );
  }
}

export default CardsVariant;
