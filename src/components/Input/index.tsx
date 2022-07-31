import { Input as NativeBaseInput, IInputProps } from "native-base";

const Input = ({ ...rest }: IInputProps) => {
  return (
    <NativeBaseInput
      height={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      color="white"
      {...rest}
      _focus={{
        borderWidth: 1,
        borderColor: "gray.500",
      }}
    />
  )
}

export default Input;
