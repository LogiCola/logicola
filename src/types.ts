export interface Section {
	name: string;
	isEnabled?: boolean;
	url: string;
}

export interface TableOfContentProps {
	title: string;
	sections: Section[];
}
