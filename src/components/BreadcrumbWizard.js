import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import '../styles/breadcrumb.css';

class BreadcrumbWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    };
    this.renderElement = this.renderElement.bind(this);
    this.redirectData = this.redirectData.bind(this);
  }

  componentDidMount() {
    let currentData = this.props.jsonData.data.filter(
      (item) => item.path === this.props.routePath
    )[0];
    let ds =
      currentData && currentData.parent_id
        ? this.renderElement(currentData, this.props.jsonData)
        : null;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ arr: [] });
    if (nextProps !== this.props) {
      let currentData = this.props.jsonData.data.filter(
        (item) => item.path === nextProps.routePath
      )[0];
      let ds =
        currentData && currentData.parent_id
          ? this.renderElement(currentData, this.props.jsonData)
          : null;
    }
  }

  redirectData(path) {
    this.props.props.history.push(path);
  }

  renderElement(currentData, jsonData) {
    var dbss = jsonData.data.map((item) => {
      var _this = this;
      if (item.id == currentData.parent_id) {
        if (currentData.parent_id !== undefined) {
          return (
            <React.Fragment key={item.name}>
              <li className="separator" key={item.name}>
                <span>{this.props.separator}</span>
              </li>
              <li className="nav-item">
                <a
                  href="javascript:void(0)"
                  onClick={() => this.redirectData(item.path)}
                >
                  {item.name}
                </a>
              </li>
              {this.renderElement(item, this.props.jsonData)}
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={item.name}>
              <li className="separator" key={item.name}>
                <span>{this.props.separator}</span>
              </li>
              <li className="nav-item">
                <a
                  href="javascript:void(0)"
                  onClick={() => this.redirectData(item.path)}
                >
                  {item.name}
                </a>
              </li>
              {this.renderElement(currentData, this.props.jsonData)}
            </React.Fragment>
          );
        }
      }
    });

    let compdbss = _.compact(dbss);
    if (compdbss[0] !== undefined) {
      this.state.arr.push(compdbss[0]);
      this.setState({ ...this.state });
    }
  }

  checkUniq(data) {
    return _.uniqBy(data, 'key');
  }

  render() {
    let data = this.props.jsonData.data;
    let routePath = this.props.routePath;
    let currentData = data.filter(
      (item) => item.path === this.props.routePath
    )[0];
    const { error, success_message } = this.state;
    if (currentData) {
      return (
        <div className="page-header">
          <ul className="breadcrumbs">
            <li className="nav-home">
              <a href="#">
                <img src={this.props.rootPathImg} style={{ width: 20 }} />
              </a>
            </li>

            {_.isEmpty(this.state.arr) ? null : this.checkUniq(this.state.arr)}
            <li className="separator">
              <span>{this.props.separator}</span>
            </li>
            <li className="nav-item">
              <Link to={'#'}>{currentData.name}</Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BreadcrumbWizard;
