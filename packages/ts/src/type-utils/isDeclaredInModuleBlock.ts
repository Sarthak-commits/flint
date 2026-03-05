import ts from "typescript";

export function isDeclaredInModuleBlock(
	declaration: ts.Declaration,
	packageName: string,
) {
	let current: ts.Node = declaration;
	while (!ts.isSourceFile(current)) {
		if (
			ts.isModuleDeclaration(current) &&
			!(current.flags & ts.NodeFlags.Namespace) &&
			ts.isStringLiteral(current.name) &&
			current.name.text === packageName
		) {
			return true;
		}
		current = current.parent;
	}
	return false;
}
