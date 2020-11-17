import React from 'react';
import PropTypes from 'prop-types';

// export default function BetterImage({ resize, ...props }) {
//   return(
//     // optimization features
//       // resize: resize image (not at shallow level)
//         // resize="200x200"
//       // format: convert image format
//         // format="webp"
//       // quality (file size): converting image to desired pixel density based on viewport
//         // quality="mobile"
//         // quality="tablet"
//       // cache: cache image option on rerender on repeated content
//         // cache="yes"
//       // priority: priority attribute tag prioritizes the render of the component
//         // priority="high" // renders the component right away
//         // priotity="low" // lazy loads the components
//       //

//     // vanity features
//       // flip: horizontal or vertical
//         // flip="vertical"
//       // rotate
//         // rotate="90" // max at 360
//       // mask
//         // mask="darker"
//       // contrast
//         // contrast="30" // max at 100
//       // filter
//         // filter="sepia" // famous filters
//       // shape
//         // shape="star" // creates a star shaped image
//       // corners
//         // corners="round" // creates a round corner

//     // extension
//       // dynamicQuality:
//         // dyanmicQuality="mobileFirst"
//           // advantageous for init load and SEO
//         // dyanmicQuality="qualityFirst"
//           // advantageous for low count of images to render
//           // advantageous for webs that need quality images
//       // Isometric render specific features
//         // isometric="SPA"
//           // optimized for Single Page Applications
//         // isometric="SSR"
//           // optimized for Server Side Rendering
//         // shallowEdits:
//           // shallowEdit="yes"
//             // edit the image at CSS-level
//             // edit the image at file-render-level
//   )
// }

BetterImage.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
