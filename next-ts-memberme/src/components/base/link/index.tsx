import cx from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  path: string;
  label?: string;
  children?: string | React.ReactNode[];
  className?: string;
}
// NOTE: 파일 모두 tsx로 바꾸는 작업 하기
export function NavLink({ path, label, children, ...rest }: NavLinkProps) {
  const router = useRouter();

  return (
    <NextLink href={path}>
      <a
        {...rest}
        className={cx({ active: router.pathname === path }, rest.className)}
      >
        {children ? children : label}
      </a>
    </NextLink>
  );
}
export function Link({ path, label, children, ...rest }: NavLinkProps) {
  return (
    <NextLink href={path}>
      <a {...rest}>{children ? children : label}</a>
    </NextLink>
  );
}
