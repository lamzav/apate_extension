import React, { useState } from "react";
import * as styles from "./InputClaim.module.css";
import Help from "./Help";

export const MAX_CHAR_COUNT = 400;

function InputClaim() {
  const [claimText, setClaimText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setClaimText(event.target.value);
  };
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const getCharacterCountStyle = () => {
    if (claimText.length === MAX_CHAR_COUNT)
      return styles.characterCountReached; // Error text when character limit is reached
    if (isFocused) return styles.characterCountActive; // Blue text when textarea is active
    return styles.characterCountInactive; // Gray text when textarea is inactive
  };

  const getCharacterCountText = () => {
    if (claimText.length === MAX_CHAR_COUNT) return "Character limit reached";
    if (claimText.length > 0)
      return `${claimText.length}/${MAX_CHAR_COUNT} characters`;
    return `${MAX_CHAR_COUNT} character limit`;
  };

  return (
    <div
      className={`container flow-content ${styles.inputClaim}`}
      data-testid="input-claim"
    >
      <textarea
        className={styles.claimText}
        data-testid="claim-text"
        maxLength={MAX_CHAR_COUNT}
        rows={12}
        autoFocus={true}
        placeholder="Enter your claim here (e.g. 'The Earth is flat')"
        value={claimText}
        onChange={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></textarea>
      <div
        className={`${styles.characterCount} ${getCharacterCountStyle()}`}
        data-testid="character-count"
      >
        {getCharacterCountText()}
      </div>
      <div className={`container ${styles.verifyButtons}`}>
        <button
          className={`button ${styles.verifyButton}`}
          aria-label="Verify claim"
          title="Verify claim"
        >
          Verify
        </button>
        <Help></Help>
      </div>
    </div>
  );
}

export default InputClaim;
