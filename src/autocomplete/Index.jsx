import React, { useEffect, useState } from "react";

function Index() {
  const list = ["delhi", "delhi1", "delhi2", "blr", "chennai"];
  const [cityList, setCityList] = useState(list);
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      updateList(value);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  function updateList(value) {
    const searchValue = value.trim().toLowerCase();

    const newList = list.filter((item) => {
      return searchValue === "" || item.toLowerCase().includes(searchValue);
    });

    setCityList(newList);
  }

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search city..."
      />

      {cityList.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default Index;
