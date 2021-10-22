import * as colors from "./colors";

const scrollbars = `
  /* styles firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${colors.textSecondaryA15} transparent;
  }

  /* styles chrome, edge and safari */
  *::-webkit-scrollbar {
    height: 1rem;
    width: 1rem;
  }

  *::-webkit-scrollbar-track {
    background: transparent !important;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${colors.textSecondaryA15};
    background-clip: content-box;
    border-radius: 1rem;
    border: 0.3rem solid transparent;
  }
`;

export default scrollbars;