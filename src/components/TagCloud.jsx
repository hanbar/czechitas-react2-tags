import React, { useState } from "react";

export const TagCloud = () => {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, { label: value, timestamp: new Date().getTime() }]);
    setValue("");
  };

  const handleClick = () => {
    const index = 0;
    const items = [...tags];
    items.splice(index, 1);
    setTags(items);
  };

  return (
    <>
      {tags.map((tag) => (
        <span key={tag.timestamp} style={{ paddingRight: "5px" }}>
          {tag.label}
        </span>
      ))}
      {tags.length > 0 && (
        <button onClick={handleClick}>Odstranit první</button>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="addTag">Tag: </label>
        <input
          type="text"
          id="addTag"
          name="tag"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />{" "}
        <input type="submit" value="Přidat tag" />
      </form>
    </>
  );
};
