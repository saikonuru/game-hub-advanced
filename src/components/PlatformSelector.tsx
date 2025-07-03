import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const { platformId, setPlatformId } = useGameQueryStore((s) => ({
    platformId: s.gameQuery.platformId,
    setPlatformId: s.setPlatformId,
  }));

  if (error) return null;

  const selectedPlatformName =
    data?.results.find((p) => p.id === platformId)?.name || "Platforms";

  return (
    <Menu>
      <MenuButton as="button">
        <span style={{ marginRight: 8 }}>{selectedPlatformName}</span>
        <BsChevronDown />
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
