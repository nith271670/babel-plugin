export const Welcome = (props) => {
  return (
    <div>
      <div>
        <Label uuid = "label1" description="desc1" name="name1">dawwadwad</Label>
        <div>
        <Label name="name2" uuid = "label2" description="desc2">dawwadwad</Label>
        </div>
      </div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
};

export default Welcome;
