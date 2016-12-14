jQuery(function ($) {
  const $usableFormDiv = $('#usableForm')
  const $form = $usableFormDiv.find('form[data-form]')

  // $form.on('submit', function (event) {
  //   alert('Отправка формы')
  //   event.preventDefault()
  // })

  const $professionInput = $form.find('input[data-profession]')
  $professionInput.autocomplete({
    minLength: 2,
    source: [
      'Аптекарь',
      'Бондарь',
      'Брыляр (шляпник)',
      'Винокур',
      'Гончар',
      'Гравёр',
      'Гробовщик',
      'Жестянщик',
      'Зеркальщик',
      'Золотарь',
      'Иконописец',
      'Каменщик',
      'Кожемяка (кожевенник)',
      'Кондитер',
      'Корзинщик',
      'Кузнец',
      'Лакировщик',
      'Литейщик',
      'Лудильщик (медник)',
      'Лучник',
      'Маляр',
      'Мебельщик',
      'Мельник',
      'Мечник',
      'Медник',
      'Мясник',
      'Оптик',
      'Оружейник',
      'Парикмахер',
      'Пекарь',
      'Переплётчик',
      'Печатник',
      'Перчаточник',
      'Печник',
      'Пивовар',
      'Плотник',
      'Повар',
      'Портной',
      'Резчик',
      'Сапожник',
      'Скорняк',
      'Скульптор',
      'Слесарь',
      'Солевар',
      'Стеклодув',
      'Стекольщик',
      'Столяр',
      'Стрельник',
      'Ткач',
      'Токарь',
      'Трубочист',
      'Часовщик',
      'Шорник',
      'Ювелир',
    ],
  })

  const $phoneInput = $form.find('input[data-phone]')
  const phoneMasks = {
    ru: '+7 ?999999999999999',
    us: '+1 ?999999999999999',
    gb: '+44 ?999999999999999',
    fr: '+33 ?999999999999999',
  }
  const $flagSelect = $form.find('select[data-flag]')

  function setFlag (flag) {
    $flagSelect.attr('data-flag', flag)
    $phoneInput.val('')
    $phoneInput.mask(phoneMasks[flag], {autoclear: false, placeholder: ''})
    // $phoneInput.focus() // TODO при смене стрелками с клавиатуры убирается фокус с селекта
  }

  setFlag($flagSelect.val() || 'ru')

  $flagSelect.selectmenu({
    classes: {
      'ui-selectmenu-menu': 'g-flag-selectmenu',
      'ui-selectmenu-button': 'g-flag-selectmenu-button',
    },
    width: 75,
    select: function (event, ui) {
      setFlag(ui.item.value)
    },
  })
})
