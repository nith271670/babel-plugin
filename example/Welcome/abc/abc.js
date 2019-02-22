export const Welcome = (props) => {
    return (
      <div>
        <div>
          <Label uuid = "abc_lab1" description="abc_lab11" name="abc_lab11">dawwadwad</Label>
          <div>
          <Label name="abc_lab2" uuid = "abc_lab12" description="abc_lab12">dawwadwad</Label>
          </div>
        </div>
        <h1>Hello, {props.name}</h1>
      </div>
    );
  };
  
  export default Welcome;