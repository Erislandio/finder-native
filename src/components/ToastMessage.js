import Toast from "react-native-simple-toast";

function RenderToast({ show, message }) {
  return (
    <Toast
      visible={this.state.visible}
      position={50}
      shadow={false}
      animation={false}
      hideOnPress={true}
    >
      {message}
    </Toast>
  );
}

export default RenderToast;
