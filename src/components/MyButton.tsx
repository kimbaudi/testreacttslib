import { css } from "@emotion/react";

function MyButton() {
  return (
    <button
      type="button"
      css={css`
        background-color: red;
        color: white;
        padding: 7px 14px;
        &:hover {
          background-color: purple;
        }
      `}
    >
      Button
    </button>
  );
}

export default MyButton;
