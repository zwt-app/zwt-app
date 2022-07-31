import { Input as NativeBaseInput, IInputProps, useTheme } from "native-base";

const Input = ({ ...rest }: IInputProps) => {
  const { colors } = useTheme();
  return (
    <NativeBaseInput
      height={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      color="black"
      bg={colors.gray[200]}
      {...rest}
      _focus={{
        borderWidth: 1,
        borderColor: "gray.500",
      }}
    />
  )
}

export default Input;
