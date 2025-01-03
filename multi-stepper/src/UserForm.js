const UserForm = (props) => {
  const { index, changeHandler, formData, submitHandler, saveData } = props;
  return (
    <form type="submit" onSubmit={submitHandler}>
      <label>
        {" "}
        {formData[index].label}
        <input
          required
          id={formData[index].id}
          type={formData[index].type}
          value={saveData[formData[index].id]}
          onChange={changeHandler}
        />
      </label>
    </form>
  );
};

export default UserForm;
