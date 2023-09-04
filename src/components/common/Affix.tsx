import { Affix as MantineAffix, Button, Transition, rem } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';

export const Affix = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <MantineAffix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            leftIcon={<IconArrowUp size="1rem" />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            一番上に戻る
          </Button>
        )}
      </Transition>
    </MantineAffix>
  );
};
