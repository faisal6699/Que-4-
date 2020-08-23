import React, { Component } from "react";
import "tachyons";
import "./App.css";
import Cardsbrand from "./cards/Cardsbrand";
import Cardscatagory from "./cards/Cardscatagory";
import CardsVariant from "./cards/CardsVariant";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h4 className="mh4 ph5">Add new product</h4>
        <form className="pa4 black-80 form-inline">
          <div className="measure w-50 mh4 ph4 pa3">
            <label className="f6 b db mb2">Name</label>
            <input
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
              placeholder="e.g Lux"
            />
          </div>
          <div className="measure w-50 mh4 ph4 pa3">
            <label for="name" className="f6 b db mb2">
              SKU
            </label>
            <input
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
              placeholder="sku-1234"
            />
          </div>

          <div class="flex w-100 mh4 ph4  items-center mb2 pa3">
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">
              Stockable
            </label>
          </div>

          <div className="measure w-50 mh4 ph4 pa3">
            <label for="name" className="f6 b db mb2">
              Product Brand
            </label>
            <Cardsbrand />
          </div>
          <div className="measure w-50 mh4 ph4">
            <label for="name" className="f6 b db mb2">
              Product Catagory
            </label>
            <Cardscatagory />
          </div>

          <div className="measure w-50 mh4 ph4 pa3">
            <label for="name" className="f6 b db mb2">
              Description
            </label>
            <textarea
              id="comment"
              name="comment"
              class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
              aria-describedby="comment-desc"
              placeholder="Product description..."
            ></textarea>
          </div>
          <div className="measure w-50 mh4 ph4 pa3">
            <label for="name" className="f6 b db mb2">
              USP
            </label>
            <textarea
              id="comment"
              name="comment"
              class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
              aria-describedby="comment-desc"
              placeholder="Product USP..."
            ></textarea>
          </div>

          <div className="measure w-50 mh4 ph4 pa3">
            <label for="name" className="f6 b db mb2">
              Image
            </label>
            <input type="file" id="selectImage" name="filename" />
          </div>
          <div className="measure w-50 mh4 ph4 pa3">
            <label for="name" className="f6 b db mb2">
              Variant Catagory
            </label>
            <CardsVariant />
          </div>

          <div
            className="w-100 mh4 ph4 pa3"
            style={{ textAlign: "right", marginRight: "220px" }}
          >
            <a className="f6 link dim ba ph3 pv2 ma2 dib near-black" href="#0">
              Close
            </a>
            <a
              className="f6 link dim ba ph3 pv2 ma2 dib white bg-dark-green"
              href="#0"
            >
              Save
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
