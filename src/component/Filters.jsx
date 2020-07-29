import React, { useState } from "react";

const Filters = () => {
  const [filter, setFilter] = useState([]);

  return (
    <div class="form-group">
      <label for="exampleFormControlSelect1">tags</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>Canadian</option>
        <option>CertClean</option>
        <option>Vegan</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
};

export default Filters;
