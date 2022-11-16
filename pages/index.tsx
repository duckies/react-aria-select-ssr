import { Select } from "components/Select";
import { Item } from "react-stately";

export default function IndexPage() {
  return (
    <div className="h-screen max-w-lg flex flex-col items-center">
      <p className="mt-8 mb-16 text-gray-600">
        This sandbox is a <strong>Next.js</strong> SSR example of the React-Aria
        select component.
      </p>

      <Select label="Favorite Animal">
        <Item key="red panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
      </Select>
    </div>
  );
}
