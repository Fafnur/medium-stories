import { DashboardHeroComponent, Hero } from './dashboard-hero.component';

describe('DashboardHeroComponent', () => {
  it('raises the selected event when clicked', () => {
    const comp = new DashboardHeroComponent();
    const hero: Hero = { id: 42, name: 'Test' };
    comp.hero = hero;

    comp.selected.subscribe(selectedHero => expect(selectedHero).toBe(hero));
    comp.onSelectHero();
  });
});
