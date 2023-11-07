import clsx from 'clsx';
import { SpritesMap } from './sprite.h';

export type IconName<Group extends keyof SpritesMap> = SpritesMap[Group];

export interface IconProps<Group extends keyof SpritesMap> {
    name: IconName<Group>;
    type?: Group;
    className?: string;
}

export function Icon<Group extends keyof SpritesMap = 'common'>({ type, name, className }: IconProps<Group>) {
    return (
        <svg className={clsx("icon", className)}>
            <use xlinkHref={`/sprite/${type}.svg#${name}`} />
        </svg>
    );
}
