"use strict";
exports.id = 263;
exports.ids = [263];
exports.modules = {

/***/ 263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Portfolio)
});

// EXTERNAL MODULE: external "isotope-layout"
var external_isotope_layout_ = __webpack_require__(349);
var external_isotope_layout_default = /*#__PURE__*/__webpack_require__.n(external_isotope_layout_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(104);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/popup/DetailsPopup.js



const DetailsPopup = ({
  open,
  close
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `dizme_tm_modalbox ${open ? "opened" : ""}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "box_inner",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "close",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "#",
          onClick: () => close(),
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-cancel"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "description_wrap",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "popup_details",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "top_image",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "img/thumbs/4-2.jpg",
              alt: "image"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "main",
              "data-img-url": "img/portfolio/6.jpg",
              style: {
                backgroundImage: 'url("img/portfolio/6.jpg")'
              }
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "portfolio_main_title",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Global Evolution"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                children: "Detail"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "main_details",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "textbox",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible."
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: `Mockups are useful both for the creative phase of the project
                  - for instance when you're trying to figure out your user
                  flows or the proper visual hierarchy - and the production
                  phase when they phase when they will represent the target
                  product. Building mockups strikes the ideal balance ease of
                  modification.`
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "detailbox",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "first",
                    children: "Client"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Alvaro Morata"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "first",
                    children: "Category"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "Detail"
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "first",
                    children: "Date"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "March 07, 2021"
                  })]
                })]
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "additional_images",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "list_inner",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "my_image",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/4-2.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/1.jpg",
                      style: {
                        backgroundImage: 'url("img/portfolio/1.jpg")'
                      }
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "list_inner",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "my_image",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/4-2.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/2.jpg",
                      style: {
                        backgroundImage: 'url("img/portfolio/2.jpg")'
                      }
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "list_inner",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "my_image",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/4-2.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/3.jpg",
                      style: {
                        backgroundImage: 'url("img/portfolio/3.jpg")'
                      }
                    })]
                  })
                })
              })]
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const popup_DetailsPopup = (DetailsPopup);
;// CONCATENATED MODULE: ./src/components/Portfolio.js







const Portfolio = () => {
  (0,external_react_.useEffect)(() => {
    (0,utilits/* dataImage */.CC)();
    (0,utilits/* portfolioHover */.gl)();
  }, []); // Isotope

  const isotope = (0,external_react_.useRef)();
  const {
    0: filterKey,
    1: setFilterKey
  } = (0,external_react_.useState)('*');
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      isotope.current = new (external_isotope_layout_default())('.gallery_zoom', {
        itemSelector: '.grid-item',
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item'
        },
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  (0,external_react_.useEffect)(() => {
    if (isotope.current) {
      filterKey === '*' ? isotope.current.arrange({
        filter: `*`
      }) : isotope.current.arrange({
        filter: `.${filterKey}`
      });
    }
  }, [filterKey]);

  const handleFilterKeyChange = key => () => {
    setFilterKey(key);
  };

  const activeBtn = value => value === filterKey ? 'current' : ''; // Popup


  const {
    0: popup,
    1: setPopup
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "dizme_tm_section",
    id: "portfolio",
    children: [/*#__PURE__*/jsx_runtime_.jsx(popup_DetailsPopup, {
      open: popup,
      close: () => setPopup(false)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dizme_tm_portfolio",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "dizme_tm_main_title",
          "data-align": "center",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Portfolio"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "dizme_tm_portfolio_titles"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "portfolio_list wow fadeInUp",
          "data-wow-duration": "1s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "gallery_zoom grid",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "popup grid-item",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Talks-at-Yale",
                  "data-category": "Group Project: Event Combiner at Yale University",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    href: "https://github.com/yale-cpsc-419-sp23/Talks-at-Yale",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/42-34.jpg",
                      alt: "image",
                      className: "project-image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/Yale_Logo.png.png"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "project-description",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "Talks at Yale is a project developed to simplify the lives of students dealing with various speaker events on campus. The website serves as a centralized platform that gathers information from over 100 Yale departments and presents it to the user. Users have the ability to add events to their personal database and also see which events their friends have registered."
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "This centralized platform provides a convenient and efficient way for students to stay informed about upcoming events on campus."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "popup grid-item",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "UNS",
                  "data-category": "Internship CyberSecurity Project",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "zoom",
                    href: "https://github.com/ElonAbergel/UNS",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/42-34.jpg",
                      alt: "image",
                      className: "project-image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/aaa.png"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "project-description",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "This project is a demo version of UNS (Unicorn Super Network) \u2013 a project showcasing the potential of decentralized networking. UNS utilizes decentralization, peer-to-peer connectivity, and blockchain consensus to enable secure communication, data transfer, and resource sharing in a decentralized network."
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "The demo features a social media platform called Ywitter, demonstrating the functionality of UNS and its Sybil Authentication mechanism."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "popup grid-item",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "AtgariLi",
                  "data-category": "Solo Project: Ninja Corporate Company",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    href: "https://github.com/ElonAbergel/AtgariLi",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/42-34.jpg",
                      alt: "image",
                      className: "project-image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/AtgariLi.png"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "project-description",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "AtgariLi Ninja Birthdays and Classes is a company that specializes in ninja-themed birthdays and classes for kids. AtgariLi is dedicated to delivering extraordinary experiences that combine excitement, skill-building, and tons of fun for children."
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "Their services include action-packed ninja-themed birthday parties, featuring thrilling obstacle courses and epic challenges. Additionally, we offer expert-led ninja classes that help kids enhance their agility, focus, discipline, and teamwork skills while having a blast."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "detail grid-item",
              onClick: () => setPopup(true)
            })]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const components_Portfolio = (Portfolio);

/***/ })

};
;