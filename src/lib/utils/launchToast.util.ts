import { toast } from 'svoast';

export async function launchToast(
	text: string,
	type: 'success' | 'warning' | 'error' | 'info',
	duration: number = 1200
) {
	if (text) {
		if (type == 'success') {
			toast.success(text, { closable: true, duration });
		} else if (type == 'error') {
			toast.error(text, { closable: true, duration });
		} else if (type == 'warning') {
			toast.warning(text, { closable: true, duration });
		} else if (type == 'info') {
			toast.attention(text, { closable: true, duration });
		}
	}
}
