import type { Section } from '@/generated/typescript-axios';

import { useSections } from '@/utils/hooks/api/useSections';
import { useAuth } from '@/utils/hooks/useAuth';
import { Avatar } from '@mantine/core';
import Link from 'next/link';

type Props = {
  visibleNum?: number;
};

export const SectionCards = ({ visibleNum }: Props) => {
  const { user } = useAuth();
  const { sections } = useSections();

  if (sections === undefined || user === undefined) {
    return null;
  }

  const filteredSections: Section[] = [];

  if (visibleNum === undefined) {
    filteredSections.push(...sections);
  } else {
    if (sections) {
      if (sections.length > visibleNum) {
        for (let i = 0; i < sections.length; i++) {
          if (filteredSections.length == visibleNum) {
            break;
          }
          if (sections[i].section_id !== user.section?.section_id) {
            filteredSections.push(sections[i]);
          }
        }
      } else {
        sections.forEach((section) => {
          filteredSections.push(section);
        });
      }
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredSections.map((section) => {
        return (
          <Link
            key={section.section_id}
            href={`/sections/${section.section_id}`}
            className="flex flex-1 items-center justify-center gap-8 rounded-lg border border-gray-200 px-4 py-16 transition-colors hover:bg-gray-100"
          >
            <Avatar src={`/section_images/${section.icon}.png`} size={96} />
            <div>
              <p className="text-xl font-bold">{section.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
