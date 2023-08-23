# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: drone_mode.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from . import form_inputs_pb2 as form__inputs__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x10\x64rone_mode.proto\x12\x0b\x41pplication\x1a\x11\x66orm_inputs.proto\"p\n\x06TVGrid\x12\r\n\x05width\x18\x01 \x01(\x05\x12\x0e\n\x06height\x18\x02 \x01(\x05\x12\x10\n\x08position\x18\x03 \x01(\x05\x12\x12\n\ndevice_ids\x18\x04 \x03(\t\x12\x0b\n\x03row\x18\x05 \x01(\x05\x12\x0e\n\x06\x63olumn\x18\x06 \x01(\x05J\x04\x08\x07\x10\x08\"\x86\x01\n\rInputTokenMap\x12\x41\n\x0cinput_tokens\x18\x01 \x03(\x0b\x32+.Application.InputTokenMap.InputTokensEntry\x1a\x32\n\x10InputTokensEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\xaa\x01\n\x0eInputChoiceMap\x12\x44\n\rinput_choices\x18\x01 \x03(\x0b\x32-.Application.InputChoiceMap.InputChoicesEntry\x1aR\n\x11InputChoicesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12,\n\x05value\x18\x02 \x01(\x0b\x32\x1d.Application.InputTokenChoice:\x02\x38\x01\"A\n\x0f\x43hoiceValueList\x12.\n\x0c\x63hoice_value\x18\x01 \x03(\x0b\x32\x18.Application.ChoiceValue\">\n\x10TimepickerChoice\x12\x0e\n\x06preset\x18\x01 \x01(\t\x12\r\n\x05start\x18\x02 \x01(\x01\x12\x0b\n\x03\x65nd\x18\x03 \x01(\x01\"\xd5\x02\n\x10InputTokenChoice\x12\x38\n\x10\x63heckbox_choices\x18\x01 \x01(\x0b\x32\x1c.Application.ChoiceValueListH\x00\x12;\n\x13multiselect_choices\x18\x02 \x01(\x0b\x32\x1c.Application.ChoiceValueListH\x00\x12\x30\n\x0cradio_choice\x18\x03 \x01(\x0b\x32\x18.Application.ChoiceValueH\x00\x12\x33\n\x0f\x64ropdown_choice\x18\x04 \x01(\x0b\x32\x18.Application.ChoiceValueH\x00\x12\x18\n\x0etextbox_choice\x18\x05 \x01(\tH\x00\x12:\n\x11timepicker_choice\x18\x06 \x01(\x0b\x32\x1d.Application.TimepickerChoiceH\x00\x42\r\n\x0buser_choice\"\xd7\x04\n\x08TVConfig\x12\x11\n\tdevice_id\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65vice_name\x18\x02 \x01(\t\x12\'\n\x04mode\x18\x03 \x01(\x0e\x32\x19.Application.TVConfigMode\x12\x0f\n\x07\x63ontent\x18\x04 \x01(\t\x12$\n\x07tv_grid\x18\x05 \x01(\x0b\x32\x13.Application.TVGrid\x12\x11\n\ttimestamp\x18\x06 \x01(\x03\x12\x12\n\ncaptain_id\x18\x07 \x01(\t\x12\x13\n\x0b\x63\x61ptain_url\x18\x08 \x01(\t\x12\x1a\n\x12slideshow_duration\x18\n \x01(\x05\x12<\n\x0cinput_tokens\x18\x0b \x03(\x0b\x32&.Application.TVConfig.InputTokensEntry\x12<\n\x0cuser_choices\x18\x0c \x03(\x0b\x32&.Application.TVConfig.UserChoicesEntry\x12\x18\n\x10repeated_content\x18\r \x03(\t\x12.\n\x0b\x64\x65vice_type\x18\x0e \x01(\x0e\x32\x19.Application.TVDeviceType\x1aN\n\x10InputTokensEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12)\n\x05value\x18\x02 \x01(\x0b\x32\x1a.Application.InputTokenMap:\x02\x38\x01\x1aO\n\x10UserChoicesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12*\n\x05value\x18\x02 \x01(\x0b\x32\x1b.Application.InputChoiceMap:\x02\x38\x01J\x04\x08\t\x10\n\"\x9e\x01\n\x06TVData\x12(\n\ttv_config\x18\x01 \x01(\x0b\x32\x15.Application.TVConfig\x12\x14\n\x0c\x64isplay_name\x18\x02 \x01(\t\x12\x11\n\tdevice_id\x18\x03 \x01(\t\x12\x11\n\tis_active\x18\x04 \x01(\x08\x12.\n\x0b\x64\x65vice_type\x18\x05 \x01(\x0e\x32\x19.Application.TVDeviceType\".\n\x06TVList\x12$\n\x07tv_data\x18\x01 \x03(\x0b\x32\x13.Application.TVData\"&\n\x11StartMPCBroadcast\x12\x11\n\tdevice_id\x18\x01 \x01(\t\"\xc1\x01\n\nTVBookmark\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\x12?\n\rtv_config_map\x18\x04 \x03(\x0b\x32(.Application.TVBookmark.TvConfigMapEntry\x1aI\n\x10TvConfigMapEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12$\n\x05value\x18\x02 \x01(\x0b\x32\x15.Application.TVConfig:\x02\x38\x01J\x04\x08\x03\x10\x04\"\x82\x01\n\x12TVCollectionDevice\x12\x11\n\tdevice_id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0b\n\x03row\x18\x03 \x01(\x05\x12\x0e\n\x06\x63olumn\x18\x04 \x01(\x05\x12.\n\x0b\x64\x65vice_type\x18\x05 \x01(\x0e\x32\x19.Application.TVDeviceType\"\xa8\x01\n\x0cTVCollection\x12\x15\n\rcollection_id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x36\n\x0f\x63ollection_type\x18\x03 \x01(\x0e\x32\x1d.Application.TVCollectionType\x12;\n\x12\x63ollection_devices\x18\x04 \x03(\x0b\x32\x1f.Application.TVCollectionDevice\".\n\x16TVCollectionGetRequest\x12\x14\n\x0c\x63ollectionId\x18\x01 \x01(\t\"I\n\x16TVCollectionSetRequest\x12/\n\x0ctvCollection\x18\x01 \x01(\x0b\x32\x19.Application.TVCollection\"K\n\x17TVCollectionGetResponse\x12\x30\n\rtvCollections\x18\x01 \x03(\x0b\x32\x19.Application.TVCollection\"\x19\n\x17TVCollectionSetResponse\"1\n\x19TVCollectionDeleteRequest\x12\x14\n\x0c\x63ollectionId\x18\x01 \x01(\t\"\x1c\n\x1aTVCollectionDeleteResponse\"\xff\x02\n\rTVInteraction\x12\x11\n\tdevice_id\x18\x01 \x01(\t\x12\x35\n\x0fslideshow_go_to\x18\x02 \x01(\x0b\x32\x1a.Application.SlideshowGoToH\x00\x12\x34\n\x0eslideshow_stop\x18\x03 \x01(\x0b\x32\x1a.Application.SlideshowStopH\x00\x12:\n\x11slideshow_forward\x18\x04 \x01(\x0b\x32\x1d.Application.SlideshowForwardH\x00\x12\x34\n\x0eslideshow_back\x18\x05 \x01(\x0b\x32\x1a.Application.SlideshowBackH\x00\x12\x36\n\x0fslideshow_speed\x18\x06 \x01(\x0b\x32\x1b.Application.SlideshowSpeedH\x00\x12\x32\n\rstart_preview\x18\x07 \x01(\x0b\x32\x19.Application.StartPreviewH\x00\x42\x10\n\x0etv_instruction\"\x0f\n\rSlideshowGoTo\"\x0f\n\rSlideshowStop\"\x12\n\x10SlideshowForward\"\x0f\n\rSlideshowBack\"\x1f\n\x0eSlideshowSpeed\x12\r\n\x05speed\x18\x01 \x01(\x05\"\x0e\n\x0cStartPreview\"D\n\x16\x43lientPreviewSubscribe\x12\x11\n\tdevice_id\x18\x01 \x01(\x0c\x12\x17\n\x0fsubscription_id\x18\x02 \x01(\t\"-\n\x18\x43lientPreviewUnsubscribe\x12\x11\n\tdevice_id\x18\x01 \x01(\x0c\"U\n\x10MediaSendRequest\x12\x15\n\rrequest_media\x18\x01 \x01(\x0c\x12*\n\nmedia_type\x18\x02 \x01(\x0e\x32\x16.Application.MediaType\")\n\x11MediaSendResponse\x12\x14\n\x0cstop_preview\x18\x01 \x01(\x08\"J\n\rPreviewUpdate\x12\x13\n\x0bpreview_uri\x18\x01 \x01(\t\x12\x11\n\ttimestamp\x18\x02 \x01(\x03\x12\x11\n\tdevice_id\x18\x03 \x01(\t*O\n\x0cTVConfigMode\x12\x10\n\x0cUNKNOWN_MODE\x10\x00\x12\r\n\tDASHBOARD\x10\x01\x12\t\n\x05IMAGE\x10\x02\x12\x13\n\x0f\x44\x41SHBOARD_GROUP\x10\x03*R\n\x0cTVDeviceType\x12\x17\n\x13UNKNOWN_DEVICE_TYPE\x10\x00\x12\x0c\n\x08\x41PPLE_TV\x10\x01\x12\x0e\n\nANDROID_TV\x10\x02\x12\x0b\n\x07\x46IRE_TV\x10\x03*G\n\x10TVCollectionType\x12\x1b\n\x17UNKNOWN_COLLECTION_TYPE\x10\x00\x12\x08\n\x04GRID\x10\x01\x12\x0c\n\x08NON_GRID\x10\x02*O\n\tMediaType\x12\x16\n\x12UNKNOWN_MEDIA_TYPE\x10\x00\x12\x14\n\x10VIDEO_MEDIA_TYPE\x10\x01\x12\x14\n\x10IMAGE_MEDIA_TYPE\x10\x02\x42@Z>cd.splunkdev.com/mobile/spacebridge-golang-protos/splunkcx/ssgb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'drone_mode_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z>cd.splunkdev.com/mobile/spacebridge-golang-protos/splunkcx/ssg'
  _INPUTTOKENMAP_INPUTTOKENSENTRY._options = None
  _INPUTTOKENMAP_INPUTTOKENSENTRY._serialized_options = b'8\001'
  _INPUTCHOICEMAP_INPUTCHOICESENTRY._options = None
  _INPUTCHOICEMAP_INPUTCHOICESENTRY._serialized_options = b'8\001'
  _TVCONFIG_INPUTTOKENSENTRY._options = None
  _TVCONFIG_INPUTTOKENSENTRY._serialized_options = b'8\001'
  _TVCONFIG_USERCHOICESENTRY._options = None
  _TVCONFIG_USERCHOICESENTRY._serialized_options = b'8\001'
  _TVBOOKMARK_TVCONFIGMAPENTRY._options = None
  _TVBOOKMARK_TVCONFIGMAPENTRY._serialized_options = b'8\001'
  _TVCONFIGMODE._serialized_start=3439
  _TVCONFIGMODE._serialized_end=3518
  _TVDEVICETYPE._serialized_start=3520
  _TVDEVICETYPE._serialized_end=3602
  _TVCOLLECTIONTYPE._serialized_start=3604
  _TVCOLLECTIONTYPE._serialized_end=3675
  _MEDIATYPE._serialized_start=3677
  _MEDIATYPE._serialized_end=3756
  _TVGRID._serialized_start=52
  _TVGRID._serialized_end=164
  _INPUTTOKENMAP._serialized_start=167
  _INPUTTOKENMAP._serialized_end=301
  _INPUTTOKENMAP_INPUTTOKENSENTRY._serialized_start=251
  _INPUTTOKENMAP_INPUTTOKENSENTRY._serialized_end=301
  _INPUTCHOICEMAP._serialized_start=304
  _INPUTCHOICEMAP._serialized_end=474
  _INPUTCHOICEMAP_INPUTCHOICESENTRY._serialized_start=392
  _INPUTCHOICEMAP_INPUTCHOICESENTRY._serialized_end=474
  _CHOICEVALUELIST._serialized_start=476
  _CHOICEVALUELIST._serialized_end=541
  _TIMEPICKERCHOICE._serialized_start=543
  _TIMEPICKERCHOICE._serialized_end=605
  _INPUTTOKENCHOICE._serialized_start=608
  _INPUTTOKENCHOICE._serialized_end=949
  _TVCONFIG._serialized_start=952
  _TVCONFIG._serialized_end=1551
  _TVCONFIG_INPUTTOKENSENTRY._serialized_start=1386
  _TVCONFIG_INPUTTOKENSENTRY._serialized_end=1464
  _TVCONFIG_USERCHOICESENTRY._serialized_start=1466
  _TVCONFIG_USERCHOICESENTRY._serialized_end=1545
  _TVDATA._serialized_start=1554
  _TVDATA._serialized_end=1712
  _TVLIST._serialized_start=1714
  _TVLIST._serialized_end=1760
  _STARTMPCBROADCAST._serialized_start=1762
  _STARTMPCBROADCAST._serialized_end=1800
  _TVBOOKMARK._serialized_start=1803
  _TVBOOKMARK._serialized_end=1996
  _TVBOOKMARK_TVCONFIGMAPENTRY._serialized_start=1917
  _TVBOOKMARK_TVCONFIGMAPENTRY._serialized_end=1990
  _TVCOLLECTIONDEVICE._serialized_start=1999
  _TVCOLLECTIONDEVICE._serialized_end=2129
  _TVCOLLECTION._serialized_start=2132
  _TVCOLLECTION._serialized_end=2300
  _TVCOLLECTIONGETREQUEST._serialized_start=2302
  _TVCOLLECTIONGETREQUEST._serialized_end=2348
  _TVCOLLECTIONSETREQUEST._serialized_start=2350
  _TVCOLLECTIONSETREQUEST._serialized_end=2423
  _TVCOLLECTIONGETRESPONSE._serialized_start=2425
  _TVCOLLECTIONGETRESPONSE._serialized_end=2500
  _TVCOLLECTIONSETRESPONSE._serialized_start=2502
  _TVCOLLECTIONSETRESPONSE._serialized_end=2527
  _TVCOLLECTIONDELETEREQUEST._serialized_start=2529
  _TVCOLLECTIONDELETEREQUEST._serialized_end=2578
  _TVCOLLECTIONDELETERESPONSE._serialized_start=2580
  _TVCOLLECTIONDELETERESPONSE._serialized_end=2608
  _TVINTERACTION._serialized_start=2611
  _TVINTERACTION._serialized_end=2994
  _SLIDESHOWGOTO._serialized_start=2996
  _SLIDESHOWGOTO._serialized_end=3011
  _SLIDESHOWSTOP._serialized_start=3013
  _SLIDESHOWSTOP._serialized_end=3028
  _SLIDESHOWFORWARD._serialized_start=3030
  _SLIDESHOWFORWARD._serialized_end=3048
  _SLIDESHOWBACK._serialized_start=3050
  _SLIDESHOWBACK._serialized_end=3065
  _SLIDESHOWSPEED._serialized_start=3067
  _SLIDESHOWSPEED._serialized_end=3098
  _STARTPREVIEW._serialized_start=3100
  _STARTPREVIEW._serialized_end=3114
  _CLIENTPREVIEWSUBSCRIBE._serialized_start=3116
  _CLIENTPREVIEWSUBSCRIBE._serialized_end=3184
  _CLIENTPREVIEWUNSUBSCRIBE._serialized_start=3186
  _CLIENTPREVIEWUNSUBSCRIBE._serialized_end=3231
  _MEDIASENDREQUEST._serialized_start=3233
  _MEDIASENDREQUEST._serialized_end=3318
  _MEDIASENDRESPONSE._serialized_start=3320
  _MEDIASENDRESPONSE._serialized_end=3361
  _PREVIEWUPDATE._serialized_start=3363
  _PREVIEWUPDATE._serialized_end=3437
# @@protoc_insertion_point(module_scope)
